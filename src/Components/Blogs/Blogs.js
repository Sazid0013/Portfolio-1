import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container my-5 '>
            <div className="accordion item item " id="accordionExample ">
                <div className="accordion-item item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Difference between authorization and authentication
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Verifying a person's identity is known as authentication, while determining what apps, files, and data they can access is known as authorization. Having the key to your residence is like having the key to your door.
                            Users' identities are verified as part of the authentication procedure before being granted access to the system.
                            A person or user's credentials are vetted during the authorization procedure in order to gain access to the resources.
                            Authentication involves verifying the identity of individuals or groups of individuals.
                            Users or individuals are verified throughout this procedure.
                            Prior to the authorization procedure, the user's login information is required for authentication.
                            While authorization determines What permission do user have?
                        </div>
                    </div>
                </div>
                <div className="accordion-item item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            By offering secure database access from client-side code, the Firebase Realtime Database enables us to build complex, collaborative applications. Real-time events continue to fire even when the user is offline, ensuring that the end user has a responsive experience. Other free and open-source Firebase replacements include
                            <ul>
                                <li>Parse</li>
                                <li>Back4App</li>
                                <li>AWS Amplify</li>
                                <li>Kuzzle</li>
                                <li>Couchbase</li>
                                <li>NativeScript</li>
                            </ul>
                            and many more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What other services does firebase provide other than authentication
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Cloud Messaging is only one of several Firebase services. Regardless of the platform, Firebase is an excellent solution for implementing notifications because of its speed, reliability, and scalability. Aside from that, there are no fees associated with this service.
                            An additional feature that aids in growing and maintaining your business is Google Analytics. Tracking user demographics, behavior, purchasing trends and income reporting can benefit from this data set.
                            Also hosting. With only a few clicks, our stunning websites can be up and running in no time. as well as the additional services that Firebase makes available.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;