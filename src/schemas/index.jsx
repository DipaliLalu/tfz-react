import * as Yup from 'yup';
const checkAvailabilityUsername=(username)=>{
    const data=JSON.parse(localStorage.getItem('data'));
    return data.every((curele) => curele.username !== username);
}
export const signupSchema=Yup.object({
    username:Yup.string().min(2).max(25).required("Please enter username").test("username", "This username has already been taken", function (username) {
        return checkAvailabilityUsername(username);
}),
    email:Yup.string().email().required("Please enter email"),
    password:Yup.string().min(6).required("Please enter password"),
    confirm_password:Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password'),null],"Password must match")
});

