import React from 'react'
import Copy from './Copy'
import Edit from './Edit'
import Delete from './Delete'
import './EntryRow.css'
import { DataContext } from '../Context/context'
import { useState } from 'react'
import EyeOpen from './EyeOpen'
import EyeClose from './EyeClose'


const EntryRow = ({ i, e }) => {
    const [visibility, setvisibility] = useState(false)
    const { Data, setData, formref,toast } = React.useContext(DataContext)
    const deleteRecord = () => {
        fetch('http://localhost:3000/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ index:e.index }) // Replace 'id' with the appropriate identifier for your data
        })
        setData(Data.filter((_, index) => index !== i))
    }
    const editRecord = () => {
        formref.current[0].value = e.Website
        formref.current[1].value = e.Uname
        formref.current[2].value = e.password
        deleteRecord()
    }
    const copytoClipboard = (text) => {
        navigator.clipboard.writeText(text)
        toast.success("Copied to Clipboard !", {
            position: "top-center"
        });
    }
    // const deleteRecord = () => {
    //     console.log('delete')
    // }
    return (
        <>
            <tr key={i}>
                <td>
                    <div className='cell'>
                        {e.Website}
                        <button onClick={() => copytoClipboard(e.Website)}><Copy /></button>
                    </div>
                </td>
                <td>
                    <div className='cell'>
                        {e.Uname}
                        <button onClick={() => copytoClipboard(e.Uname)}><Copy /></button>
                    </div>
                </td>
                <td>
                    <div className='cell password'>
                        {visibility ? e.password : '*'.repeat(e.password.length)}
                        <div className="passOptions">
                            <button onClick={() => copytoClipboard(e.password)}><Copy /></button>
                            <button onClick={() => setvisibility(!visibility)}>
                                {visibility ? <EyeOpen /> : <EyeClose />}
                            </button>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='cell'>
                        <button onClick={editRecord}><Edit /></button>
                        <button onClick={deleteRecord}><Delete /></button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default EntryRow
