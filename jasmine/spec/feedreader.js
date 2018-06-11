$(function() {
    /* RSS Feeds */
    
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it(' urls are defined', function(){
            for (var i = 0 ; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });
        
        it(' names are defined', function(){
            for (var i = 0 ; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });


    /* The Menu */

    describe('The menu',function(){

        it('The menu element is hidden',function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

         it('Toggle on click',function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });
e

    /* Initial Entries */

    describe('Intial Entries', function(){

        beforeEach(function(done){
            loadFeed(0 , function(){
                done();
            });
        });
        it('define if there is at least 1 entry ', function() {
            expect($('.feed .entry')).toBeDefined();
        });
    });


    /* New Feed Selection */

    describe('New Feed Selection',function(){
        var oldFeed , newFeed;
        beforeEach(function(done){
            loadFeed(0,function(){
                oldFeed = $('.feed').html();
                loadFeed(1,done);
            });
        });
        it('content actually changes', function() {
             newFeed = $('.feed').html(); 
            expect(oldFeed).not.toBe(newFeed);
        });
        

    });
        
}());
