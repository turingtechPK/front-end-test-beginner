const pricingPlansData = [
    {
        title: 'Starter',
        perMonthPriceOld: 50,
        perMonthPriceCurrent: 45,
        paidUsers: 2,
        image: require('./images/starterplan-icon.png'),
        tools: [
            {
                heading: 'Organize and track customer communications',
                list: [
                    'Ticketing',
                    'Live Chat',
                    'Conversations inbox',
                    'Calling',
                    'Conversational bots',
                    'Team email',
                    'Simple automation',
                ],
            },
            {
                heading: 'Maximize productivity',
                list: [
                    'Canned snippets',
                    'Email templates',
                    'Meeting scheduling',
                ],
            },
            {
                heading: 'Measure efficiency',
                list: [
                    'Tickets closed reports',
                    'Rep productivity reports',
                    'Time-to-close reports',
                ],
            },
        ],
    },
    {
        title: 'Professional',
        perMonthPriceOld: 500,
        perMonthPriceCurrent: 360,
        paidUsers: 5,
        image: require('./images/professionalplan-icon.png'),
        tools: [
            {
                heading: 'Delight customers at scale',
                list: [
                    'Ticket status',
                    'Ticket routing',
                    'Task automation',
                    'Ticket pipelines',
                ],
            },
            {
                heading: 'Delight customers at scale',
                list: ['Knowledge base', '1:1 video creation'],
            },
            {
                heading: 'Measure & improve customer experience',
                list: [
                    'Custom reporting',
                    'NPS surveys',
                    'Customer experience surveys',
                    'Customer support surveys',
                    'Insights dashboard',
                ],
            },
        ],
    },
    {
        title: 'Enterprise',
        perMonthPriceOld: 0,
        perMonthPriceCurrent: 1200,
        paidUsers: 10,
        image: require('./images/enterpriseplan-icon.png'),
        tools: [
            {
                heading: 'Deliver exceptional service consistently',
                list: ['Custom objects', 'Playbooks', 'Goals'],
            },
            {
                heading: 'Manage multiple teams & businesses',
                list: [
                    'Hierarchical teams',
                    'User roles',
                    'Single sign-on',
                    'Slack integration',
                    'Calculated properties',
                    'Field-level permissions',
                ],
            },
            {
                heading: 'Enable self service at scale',
                list: ['Webhooks'],
            },
        ],
    },
];

export default pricingPlansData;
