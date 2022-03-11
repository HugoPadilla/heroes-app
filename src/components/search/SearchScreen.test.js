const { mount } = require("enzyme");
const { MemoryRouter } = require("react-router-dom");
const { SearchScreen } = require("./SearchScreen");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pruebas en <SearchScreen />", () => {
  test("debe de mostrarse corectamente con valores por defectos", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Busca un heroes");
  });

  test("debe de mostrar a Batman y el input con el valor del queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("debe de mostrar un error si no se encuentra el hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=heroe"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      "No hay resultados para: heroe"
    );
  });

  test("debe de llamar al metodo handleSearch con el valor del input", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    wrapper.find("input").simulate("submit", {
      target: {
        name: "searchText",
        value: "batman",
      },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault: () => {},
    });

    expect(mockNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
