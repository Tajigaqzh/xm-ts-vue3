type Props = {
    title?:string
}
const renderDom = (props:Props) => {
    return (
        <>
            <h4>4.7 props传参（写法2）</h4>
            <div>props:{props.title}</div>
        </>
    )
}
export default renderDom