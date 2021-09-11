const Form = ({onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Content:
                <input type="text" name="contents" />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}
export default Form;