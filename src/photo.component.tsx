import React from "react";

export class PhotoComponent extends React.Component<any, any> {
        render() {
            return (
                <div>
                    <div className="ui small images">
                        <img className="ui medium rounded image" src="/images/img1.jpg"/>
                        <img className="ui medium rounded image" src="/images/img2.jpg"/>
                        <img className="ui medium rounded image" src="/images/img3.jpg"/>
                        <img className="ui medium rounded image" src="/images/img4.jpg"/>
                        <img className="ui medium rounded image" src="/images/img5.jpg"/>
                        <img className="ui medium rounded image" src="/images/img6.jpg"/>
                        <img className="ui medium rounded image" src="/images/img7.jpg"/>
                        <img className="ui medium rounded image" src="/images/img8.jpg"/>
                        <img className="ui medium rounded image" src="/images/img9.jpg"/>
                        <img className="ui medium rounded image" src="/images/img10.jpg"/>
                    </div>
                </div>
            );
        }
}