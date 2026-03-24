
type boolProps = {
    yesPrimeMinister: boolean
}

export default function Star(props: boolProps){

    return (
        <>
            <p>se her {props.yesPrimeMinister ? "BMW" : "VW"}</p>
            <p>gloria</p>
        </>
    )
}