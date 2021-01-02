import React from 'react';
import {} from './tableview.css';
function TableView(props){
    return(
        
        <React.Fragment>
            <div className="table-wrapper">
            <table  style={{ cursor: "pointer" }}>
                <thead>
                    <tr >
                        <th className="table-th">AWB NUMBER</th>
                        <th className="table-th">TRANSPORTER</th>
                        <th className="table-th">SOURCE</th>
                        <th className="table-th">DESTINATION</th>
                        <th className="table-th">BRAND</th>
                        <th className="table-th">START DATE</th>
                        <th className="table-th">EDT</th>
                        <th className="table-th">STATUS</th>
                    </tr>
            </thead>
            <tbody>
                {props.DATA.map((val ,index) => (
                //tunary operator to show selected code records
                (props.selectedcode===val.current_status_code?
                <React.Fragment  key={Math.random()} >
                    <tr key={val._id} onClick={() => props.clicked(val._id)}>
                        <td>#{val.awbno}</td>
                        <td>{val.carrier}</td>
                        <td>{val.from===null?'NA':val.from}</td>
                        <td>{val.to===null?'NA':val.to}</td>
                        <td>{val.from===null?'NA':val.from}</td>
                        <td>{val.pickup_date===null?'NA':val.pickup_date.substring(0,10)}</td>
                        <td>{('extra_fields' in val) ? val.extra_fields.expected_delivery_date.substring(0,10) : 'NA'}</td>
                        <td className={props.selectedcode==='DEL'?'tml-text-green':null }>{val.current_status}</td>
                    </tr>
                    <tr key={index} style={{border: 'none'}}>
                        <th style={{padding:'8px'}}></th>
                    </tr>
                    </React.Fragment>
                : null )
                    )
                )}
            </tbody></table>
            </div>
        </React.Fragment>
    )
}

export default TableView;