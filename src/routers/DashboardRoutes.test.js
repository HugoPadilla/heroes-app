import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { DashboardRoutes } from "./DashboardRoutes";

describe("Pruebas en <DashboardRoutes />", () => {
  const contextValue = {
    user: {
      logged: true,
      name: "Juan",
    },
  };

  test("debe de mostrarse corectamente - Marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Juan");
    expect(wrapper.find("h1").text().trim()).toBe("MarvelScreen");
  });

  test("debe de mostrarse corectamente - DC", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/dc"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("DcScreen");
  });
});