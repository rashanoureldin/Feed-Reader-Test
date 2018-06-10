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

        var element = document.querySelector('body');
        it('The menu element is hidden',function(){
            expect(element.classList.contains('menu-hidden')).toEqual(true);
        });

         it('Toggle on click',function(){
            $link = $('a.menu-icon-link');
            $link.click();
            expect(element.classList.contains('menu-hidden')).toBe(false);
            $link.click();
            expect(element.classList.contains('menu-hidden')).toBe(true);
        });

    });


    /* Initial Entries */

    describe('Intial Entries', function(){

        beforeEach(function(done){
            loadFeed(0 , done);
        });
        it('define if there is at least 1 entry ', function() {
            expect($('.entry').length).toBeGreaterThan(0);
            
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
