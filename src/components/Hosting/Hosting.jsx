import "./Hosting.css"
function Hosting() {
    return (
        <>
            <section className="hosting">
                <h2>Hosting Pricing</h2>
                <div className="hostCards">
                    <div className="hostCard host1">
                        <h4>Basic</h4>
                        <p>for very small businesses and freelancers.</p>
                        <h3>$2.5/mo</h3>
                        <ul className="hostList">
                            <li>Disk Space: <span className="bold">500 M.B</span></li>
                            <li>Bandwidth:<span className="bold"> 500 G.B</span></li>
                            <li>SubDomains:<span className="bold">Unlimited</span></li>
                            <li>Parked Domains:<span className="bold">Unlimited</span></li>
                            <li>E-mail Accounts:<span className="bold">Unlimited</span></li>
                            <li>Cpanel (control panel):<span className="bold">Yes</span></li>
                            <li>Money Back Guarantee:<span className="bold">14 Days</span></li>
                        </ul>
                        <button className="btn btn1">You will have 1 Gift</button>
                    </div>
                    <div className="hostCard">
                        <h4>Pro</h4>
                        <p>for Individuals that need sharing vlogs or need huge portfolio.</p>
                        <h3>$5/mo</h3>
                        <ul className="hostList host2">
                            <li>Disk Space: <span className="bold">3000 M.B</span></li>
                            <li>Bandwidth:<span className="bold">3 TERA</span></li>
                            <li>SubDomains:<span className="bold">Unlimited</span></li>
                            <li>Parked Domains:<span className="bold">Unlimited</span></li>
                            <li>E-mail Accounts:<span className="bold">Unlimited</span></li>
                            <li>Cpanel (control panel):<span className="bold">Yes</span></li>
                            <li>Money Back Guarantee:<span className="bold">14 Days</span></li>
                        </ul>
                        <button className="btn btn2">3 Gifts per/mo for year</button>
                    </div>
                    <div className="hostCard host3">
                        <h4>Business</h4>
                        <p>for Team that need sharing and reporting.</p>
                        <div className="dicount">
                            <h3>$8/mo</h3>
                            <p>5% discount during 2022</p>
                        </div>
                        <ul className="hostList">
                            <li>Disk Space: <span className="bold">5000 M.B</span></li>
                            <li>Bandwidth:<span className="bold"> 5 TERA</span></li>
                            <li>SubDomains:<span className="bold">Unlimited</span></li>
                            <li>Parked Domains:<span className="bold">Unlimited</span></li>
                            <li>E-mail Accounts:<span className="bold">Unlimited</span></li>
                            <li>Cpanel (control panel):<span className="bold">Yes</span></li>
                            <li>Money Back Guarantee:<span className="bold">14 Days</span></li>
                        </ul>
                        <button className="btn btn3">3 Gifts per/mo for year</button>
                    </div>
                    <div className="hostCard host4">
                        <h4>Enterprise</h4>
                        <p>for large companies that need admins & security</p>
                        <div className="dicount">
                            <h3>$12/mo</h3>
                            <p>8% discount during 2022</p>
                        </div>
                        <ul className="hostList">
                            <li>Disk Space: <span className="bold">10000 M.B</span></li>
                            <li>Bandwidth:<span className="bold"> 10 TERA</span></li>
                            <li>SubDomains:<span className="bold">Unlimited</span></li>
                            <li>Parked Domains:<span className="bold">Unlimited</span></li>
                            <li>E-mail Accounts:<span className="bold">Unlimited</span></li>
                            <li>Cpanel (control panel):<span className="bold">Yes</span></li>
                            <li>Money Back Guarantee:<span className="bold">14 Days</span></li>
                        </ul>
                        <button className="btn btn4">Just Call Us</button>
                    </div>
                </div>
                <div className="concatInfo">
                    <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
                    <p>Go Online, choose your plan and Contact us on:<a href="mailto:acontact@focal-x.com">acontact@focal-x.com </a> | <a href="tel:+963 935 033 139">+963 935 033 139</a></p>
                </div>
            </section>
        </>
    );
}
export default Hosting