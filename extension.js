({
    name: "TimeDelay", // Category Name
    description: "TimeDelay",
    author: "AJ.TAY",
    category: "Timing",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#0f3058", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="Dalay_us">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="Dalay_ms">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        ,
        {
            xml: `
                <block type="Dalay_s">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        }

    ]
});
