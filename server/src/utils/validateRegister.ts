import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "length must be greather than 2",
      },
    ];
  }

  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include an @",
      },
    ];
  }

  if (options.password.length < 6) {
    return [
      {
        field: "password",
        message: "length must be at least 6 characters",
      },
    ];
  }

  return null;
};
