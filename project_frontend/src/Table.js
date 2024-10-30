import Row from './Row';
import { useState } from 'react';

function Table() {

    const data = ["tekst1", "tekst2", "tekst3", "teskt4", "tekst5"];
    const [flag, setFlag] = useState(false);

    const data2 = [
        {
            id: "376ddfa3-8d5a-4207-addd-d14b3f943374",
            key1: "text1",
            key2: "text2",
        },
        {
            id: "f24ca3fb-3848-4053-b810-e8aef980f676",
            key1: "text1",
            key2: "text2",
        },
        {
            id: "2b500485-8653-4724-a980-5c585326e2b8",
            key1: "text1",
            key2: "text2",
        },
    ]

    function handleClick() {
        setFlag(!flag);
    }

    return(
        <div>
            {/* {flag ? <div>dzialaing</div> : <div>not dzialaing</div> } */}
            {flag ? <div>dzialaing</div> : null }
            <input type="button" onClick={handleClick}></input>
            <table>
                <thead>
                    <tr>
                        <td>lp</td>
                        <td>dane 1</td>
                        <td>dane 2</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, i, arr) => {
                            return(
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{el}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        /*data2.map((el, i, arr) => {
                            return(
                                <tr key={el.id}>
                                    <td>{data.length + i}</td>
                                    <td>{el.key1}</td>
                                    <td>{el.key2}</td>
                                </tr>
                            )
                        })*/
                        data2.map((el, i, arr) => <Row i={i} key1={el.key1} key2={el.key2} onButtonClick={() => {console.log("test")}}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;