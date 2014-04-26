var Book = DS.Model.extend({
    title: DS.attr(),
    author: DS.attr()
});

Book.reopenClass({
    FIXTURES: [{
        id: 1,
        title: 'Flash Boys',
        author: 'Michael Lewis'
    }, {
        id: 2,
        title: 'Getting to Yes: Negotiating Agreement Without Giving In',
        author: 'Roger Fisher, William L. Ury and Bruce Patton'
    }]
});

export default Book;
