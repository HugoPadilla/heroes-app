import { AppRouter } from "./AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../auth/authContext";

describe("Pruebas en <AppRouter/>", () => {
  test("debe de mostrar el login si no esta authenticado", () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });

  test("debe de mostrar el componente de Narvel si esta authenticado", () => {
    const contextValue = {
      user: {
        logged: true,
        name: "Juan",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
