var dbConfig = {
    name: 'ScoreKeeper.db',
    tables: [
        {
            name: 'game_type',
            columns: [
                {
                    name: 'id',
                    type: 'integer primary key'
                },
                {
                    name: 'name',
                    type: 'text'
                },
                {
                    name: 'subject',
                    type: 'text'
                }
            ]
        },

        {
            name: 'team',
            columns: [
                {
                    name: 'id',
                    type: 'integer primary key'
                },
                {
                    name: 'name',
                    type: 'text'
                },
                {
                    name: 'subject',
                    type: 'text'
                }
            ]
        },

        {
            name: 'entry',
            columns: [
                {
                    name: 'id',
                    type: 'integer primary key'
                },
                {
                    name: 'id_first_team',
                    type: 'integer'
                },
                {
                    name: 'id_second_team',
                    type: 'integer'
                },
                {
                    name: 'game_type_id',
                    type: 'integer'
                },
                {
                    name: 'score_first_team',
                    type: 'integer'
                }, 
                {
                    name: 'score_second_team',
                    type: 'integer'
                },
                {
                    name: 'finish_flag',
                    type: 'boolean'
                }
                
                
            ]
        }
    ]
};