import { useForm } from "react-hook-form";

const Auth = ()=>{
    
    const {register, handleSubmit, formState: {errors}} = useForm();
    
    const submitForm = (data) => {
        console.log(data); // Access the form data here
    }

    return (
        <form className="text-gray-900" onSubmit={handleSubmit(submitForm)}>
            <h1> Login </h1>
           
            <input {...register('username')} className="border-2" />
            <input {...register('password')} className="border-2" />
            <input type="submit" value="Login" /> {/* Corrected the input tag */}
        </form>
    );
}

export default Auth;
