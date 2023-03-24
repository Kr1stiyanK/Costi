import "./Landing.css";

type Props = {
    goNext: () => void
}

const Landing = (props: Props) => {
    return (
        <>
            <p>Landing</p>
            <button onClick={props.goNext}></button>
        </>
    )
}

export default Landing;