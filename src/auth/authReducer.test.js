import { authReducer } from "../../src/auth/authReducer";
import { types } from "../types/types";

describe("Pruebas en authReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("debe de authenticar y colocar el 'name' del usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Juan",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: "Juan" });
  });

  test("debe borrar el name del ususario y logged en false", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: "Juan" }, action);
    expect(state).toEqual({ logged: false });
  });
});
