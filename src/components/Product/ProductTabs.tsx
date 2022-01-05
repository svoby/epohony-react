import React, { useState } from 'react'

const ProductTabs = () => {

    const [activeTabId, setActiveTabId] = useState<number>(0)

    return (
        <div className="fancy-tab">
            <div className="nav-bar border rounded p-2">
                <div className={`nav-bar-item rounded ${activeTabId === 0 ? 'active' : ''}`} onClick={() => setActiveTabId(0)}>Description</div>
                <div className={`nav-bar-item rounded ${activeTabId === 1 ? 'active' : ''}`} onClick={() => setActiveTabId(1)}>Parameters</div>
                <div className={`nav-bar-item rounded ${activeTabId === 2 ? 'active' : ''}`} onClick={() => setActiveTabId(2)}>Accessories</div>
                <div className={`nav-bar-item rounded ${activeTabId === 3 ? 'active' : ''}`} onClick={() => setActiveTabId(3)}>Ask question</div>
            </div>
            <div className="tab-contents">
                <div className={`tab-content py-4 ${activeTabId === 0 ? 'active' : ''}`}>
                    <p>Umami lo-fi bushwick swag. Microdosing health goth narwhal chicharrones cred occupy. Skateboard yuccie pok pok, cray selvage cred marfa shoreditch migas humblebrag. umblr hammock edison bulb portland fanny pack artisan air plant thundercats.</p>
                    <h4>Letterpress echo park street</h4>
                    <ul>
                        <li>Poke woke farm-to-table try-hard</li>
                        <li>Yr cliche hell of vexillologist.</li>
                        <li>Air plant tumblr 8-bit, authentic kombucha salvia vice blog shoreditch migas gentrify green juice.</li>
                        <li>Four dollar toast banjo stumptown gochujang.</li>
                        <li>Knausgaard franzen artisan beard sartorial mumblecore</li>
                    </ul>
                    <h5>Letterpress echo park street</h5>
                    <p>Health goth butcher activated charcoal portland next level pitchfork mumblecore man braid iPhone plaid mlkshk. Prism intelligentsia forage poutine.</p>
                </div>
                <div className={`tab-content py-4 ${activeTabId === 1 ? 'active' : ''}`}>
                    <p>Parameters content…</p>
                </div>
                <div className={`tab-content py-4 ${activeTabId === 2 ? 'active' : ''}`}>
                    <p>Accessories content…</p>
                </div>
                <div className={`tab-content py-4 ${activeTabId === 3 ? 'active' : ''}`}>
                    <p>Ask question content…</p>
                </div>
            </div>
        </div>
    )
}

export default ProductTabs
