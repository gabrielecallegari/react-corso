interface ProvaInterfaccia {
    x: string,
    y: string,
    z: number
}

export default function PrimoComponente({
    x,
    y,
    z
}: ProvaInterfaccia){

    console.log(x,y,z)

    return(
        <div>
            <p>
                magico mi dubi dubi boom boom boom
            </p>
        </div>
    )
}