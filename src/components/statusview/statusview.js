import React from 'react';
import {} from './statusview.css';
import destination_img from './img/destination.svg';
import warehouse_img from './img/warehouse.svg';
function TimelineView(props) {

    let track = null;

    if('scan' in props.status){//if track status available
        track = (
            <div className="timeline">
                <div className="timeline-before" style={{marginTop:'-15px'}}><img src={destination_img} alt='flag'/> </div>
                <div className="ui grid" style={{paddingLeft: '32px'}}>
                    {props.status.scan.map((val,index) => (
                            <div className={(index===0?'three column row bg-hl':'three column row ')} key={index} >
                                <div className="column tml-text" > 
                                    <i className="circle icon point1"></i><i className="window minimize outline icon line1"></i>
                                    {val.status_detail.toLowerCase()}
                                </div>
                                <div className="column tml-text">
                                    {val.time.substring(0,10)}
                                </div>
                                <div className="column tml-text-green">
                                    {val.time.substring(10,16)}
                                </div>
                            </div>
                        ),
                    )}
                </div>
                <div className="timeline-before" style={{marginBottom:'-15px'}}><img src={warehouse_img} alt='flag'/> </div>
            </div>
        )
    }else{//if track status not available
        track = (
            <div><h3 style={{color:'cornflowerblue'}}><i className="exclamation triangle icon" ></i> No status Available </h3></div>
        )
        
    }


    return(
        <React.Fragment>
            <div className="container">
                {track}
            </div>
        </React.Fragment>
    )
}

export default TimelineView;
