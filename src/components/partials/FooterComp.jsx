import React from 'react'
import logo from "../../img/logo2.png";

function FooterComponent() {
    return (
        <>

       <div className="footer" role="contentinfo">
    <div className="row">
        <div className="small-12 columns" role="navigation" aria-label="Footer navigation">
            <ul className="footer-navigation">


                <li><a href="javascript:void(0)">Fee
                        Information</a></li>
                <li><a href="javascript:void(0)">FAQ</a></li>
                <li><a href="javascript:void(0)">Site Map</a></li>
                <li><a href="javascript:void(0)">Contact
                        Us</a></li>
                <li><a href="javascript:void(0)">Privacy
                        / Security</a></li>
                <li><a href="javascript:void(0)">Terms
                        &amp; Conditions</a></li>
                <li><a href="javascript:void(0)"
                    >Digital Terms &amp; Conditions and Fees</a></li>
                <li><a href="javascript:void(0)">ATM Locator</a></li>










                <li><a href="javascript:void(0)">Bank Of America, N. A.</a>
                </li>

            </ul>
        </div>
    </div>
    <div className="extra">
        <div className="small-12 columns">
            <div className="row language">
                <div id="lang-label" className="small-12 columns align-center">
                    <form>
                        <span id="language-label" className="uppercase"><span className="a11y-hide-visually">Select a</span>
                            Language:</span>
                        <ul aria-labelledby="language-label" className="language-short-list">
                            <li><button className="current changeCultureButton" data-culture="en-US"
                                    lang="en-US">English<span className="a11y-hide-visually"> (Selected)</span></button>
                            </li>
                            <li><button className="changeCultureButton" data-culture="es-MX" lang="es-MX">Espa??ol</button>
                            </li>
                        </ul>
                        <input type="submit" className="a11y-hide-all" tabindex="-1" value="Submit" />
                    </form>






                </div>
            </div>
            <div className="row copyright">
                <div className="small-12 columns">
                    <p>
                        Copyright 2021 Bank of America Corporation .
                        <a href="javascript:void(0)"> Visa Global Privacy
                            Notice.</a> <br />Bank of America, N.A. Member FDIC Equal Housing Lender
                    </p>
                    <div className="large-12 column align-center">
                        <p style={{color:"#000"}}>
                            <img src={logo} /><br />
                            Apple, the Apple logo and iPhone are trademarks of Apple Inc., registered in the U.S.
                            and other countries and regions. App Store is a service mark of Apple Inc. Google Play
                            and the Google Play logo are trademarks of Google LLC.
                        </p>
                        <p style={{color:"#000"}}> Your funds are eligible for FDIC insurance. Your funds are insured
                            up to $250,000 by the FDIC in the event Bank of America, N.A. fails, if specific deposit
                            insurance requirements are met. See <a
                                href="javascript:void(0)">fdic.gov/deposit/deposits/prepaid.html</a>
                            for details. In the event Bank of America, N.A. fails, the FDIC may require information
                            from you, including a government identification number, to determine the amount of your
                            insured deposits. If you do not provide this information to the FDIC access to your
                            insured funds will be delayed. </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default FooterComponent
