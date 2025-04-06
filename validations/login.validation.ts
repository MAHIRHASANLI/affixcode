import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "İstifadəçi adı ən azı 5 simvoldan ibarət olmalıdır")
    .max(20, "İstifadəçi adı ən çox 20 simvoldan ibarət olmalıdır")
    .required("İstifadəçi adı tələb olunur"),
  password: Yup.string()
    .min(5, "Parol ən azı 5 simvoldan ibarət olmalıdır")
    .max(20, "Parol ən çox 20 simvoldan ibarət olmalıdır")
    .required("Parol tələb olunur"),
});

export default loginValidationSchema;
