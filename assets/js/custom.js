(function($) {

	$(document).ready(function($) {
        $('#big-stories-toggle').click(function() {
        	$(this).toggleClass('active');
        	$('.big-stories-dropdown').slideToggle();
        });

        $('.new-articles,.carousel-hero').find('.owl-carousel').owlCarousel({
			items : 3, 
			navigation : true,
			pagination : false,
		});

        $('.carousel-hero2').find('.owl-carousel').owlCarousel({
            items : 5, 
            navigation : true,
            pagination : false,
        });

        $('.carousel-table .owl-prev').html('<i class="fa fa-caret-left"></i>');
        $('.carousel-table .owl-next').html('<i class="fa fa-caret-right"></i>');

        $('#main-menu .menu-item-has-children > a').append('<i class="fa fa-caret-down"></i>')

		$('#new-articles-toggle').click(function() {
        	$(this).toggleClass('active');
        	$('.new-articles').slideToggle();
        });

        $('.entry-section2').imagesLoaded(function() {
            if ($('.entry-section2').find('.item').length > 0) {
                $('.entry-section2 .row').masonry({
                    itemSelector: '.item',
                    columnWidth: '.col-md-4',
                });
            }
        });      

        $('.entry-section4').imagesLoaded(function() {
            if ($('.entry-section4').find('.item').length > 0) {
                $('.entry-section4 .row').masonry({
                    itemSelector: '.item',
                    columnWidth: '.col-md-3',
                });
            }
        });        

        $(".entry-section").each(function(index, el) {
            $(this).find(".col-md-4").matchHeight();
        });

        var entrySH = $('.entry-section3').height();
        entrySH = entrySH - 40;
        $('.entry-section3 .col-md-4 .item').height(entrySH);

        function bigstoriesWidth(){
            var bigstoriesWidth = $('#header').width() - 420;
            $('#header .big-stories').width(bigstoriesWidth);
        }
        bigstoriesWidth();

        $(window).resize(function() {
            bigstoriesWidth();
        });

        /* -----------------------------------------
            Responsive Menus Init with mmenu
        ----------------------------------------- */
        var mainNav = $("#navigation"),
            mobileNav = $("#mobilemenu");
        mainNav.clone().removeAttr('id').removeClass().appendTo(mobileNav);
        mobileNav.find('li').removeAttr('id');

        mobileNav.mmenu({
            offCanvas: {
                position: 'left',
                zposition: 'front'
            }
        });
    });
    
})(jQuery);
