describe('length filter', function() {

    var filter;
    var gamesObj = [
        {
            opponentName: 'NoName1',
            playerScore: 11,
            opponentScore: 21,
            time: new Date()
        },
        {
            opponentName: 'NoName2',
            playerScore: 21,
            opponentScore: 13,
            time: new Date()
        },
        {
            opponentName: 'NoName1',
            playerScore: 14,
            opponentScore: 21,
            time: new Date()
        },
        {
            opponentName: 'NoName3',
            playerScore: 21,
            opponentScore: 13,
            time: new Date()
        },
        {
            opponentName: 'NoName2',
            playerScore: 0,
            opponentScore: 11,
            time: new Date()
        }
    ];

    beforeEach(module('app'));

    beforeEach(inject(function($filter){
        filter = $filter('reverse');
    }));

    it('returns same length with initial array of objects', function() {

        expect(filter(gamesObj).length).toEqual(5);
    });

    it('returns the correct value when array of objects is reverse', function() {
        expect(filter(gamesObj)[0].opponentName).toEqual('NoName2');
        expect(filter(gamesObj)[4].opponentName).toEqual('NoName1');
    });
});