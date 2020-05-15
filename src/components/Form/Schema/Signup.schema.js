
const SignupSchema = Yup.object().shape({
	sivilstatus: Yup.string()
		.oneOf(["Gift", "Samboer", "Skilt", "Partnerskap", "Enke", "Separert"])
		.required("Required")
});

export default SignupSchema
