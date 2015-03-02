var dbConfig = {
    name: 'ScoreKeeper.db',
    tables :[
        {
            name: 'game_type',
            columns :[
                { 
                    name : 'id',
                    type: 'integer primary key'
                },
                { 
                    name : 'name',
                    type: 'text'
                },
                { 
                    name : 'subject',
                    type: 'text'
                }
            ]
        },

        {
            name: 'team',
            columns :[
                { 
                    name : 'id',
                    type: 'integer primary key'
                },
                { 
                    name : 'name',
                    type: 'text'
                },
                { 
                    name : 'subject',
                    type: 'text'
                }
            ]
        },

        {
            name: 'entry',
            columns :[
                { 
                    name : 'id',
                    type: 'integer primary key'
                },
                { 
                    name : 'id_team1',
                    type: 'integer'
                },
                { 
                    name : 'id_team2',
                    type: 'integer'
                },
                { 
                    name : 'game_type_id',
                    type: 'integer'
                }
            ]
        }
    ]
};