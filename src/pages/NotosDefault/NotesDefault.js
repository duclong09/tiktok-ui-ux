import classNames from "classnames/bind";
import styles from "./NoteDefault.module.scss";

const style = classNames.bind(styles);
const NotesDefault = (props) => {
    return (
        <>
            <h2 className={style("title-error")}>Error 404</h2>
            <img
                src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJyb3IlMjA0MDR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="#"
                className={style("images")}
            />
        </>
    );
};
export default NotesDefault;
