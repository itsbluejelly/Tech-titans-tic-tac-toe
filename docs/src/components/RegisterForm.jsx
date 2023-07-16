export default function RegisterForm(props){
    return(
        <div className="font-medium text-lg">
            <h1
                style={props.styles.formHeading}
                className="text-2xl text-center hover:text-3xl transition-all duration-[800ms] hover:cursor-pointer"
            >Create An Account</h1>

            <div
                className="flex gap-[20px] flex-col md:flex-row"
            >
                <div
                    className="flex mt-[20px] justify-evenly md:gap-[10px]"
                >
                    <p
                        style={props.styles.formHeading}
                        className="text-xl my-[10px]"
                    >Usename: </p>
                    <input 
                        type="text" 
                        name="username"
                        required
                        style={props.styles.inputFields}
                        className="rounded-lg pl-[10px] outline-none shadow-input
                        md:max-h-[30px]
                        md:m-y-auto mt-[10px] flex-grow-0"
                    />
                </div>

                <div
                    className="flex my-[20px] justify-evenly md:gap-[10px]"
                >
                    <p
                        style={props.styles.formHeading}
                        className="text-xl my-auto"
                    >Password: </p>
                    <input 
                        type="password" 
                        name="password"
                        required
                        style={props.styles.inputFields}
                        className="rounded-lg pl-[10px] outline-none shadow-input md:max-h-[30px]
                        md:m-y-auto mt-[10px] py-[5px]"
                    />
                </div>
            </div>

            <p
                style={props.styles.formHeading}
                className="text-center mx-[10px]"
            >If you <span>don't </span>have an account, consider 
                <span
                    style={props.styles.spans}
                    className="transition-all duration-500 hover:underline cursor-pointer hover:text-xl"
                > signing </span> 
            in</p>
        </div>
    )
}