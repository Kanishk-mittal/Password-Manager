import React from 'react'
import { memo } from 'react'
import EntryRow from './EntryRow'
import './DataList.css'

const DataList = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Website</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((e, i) => {
                        return (
                            <EntryRow key={i} i={i} e={e} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default memo(DataList)
