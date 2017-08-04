(function(){
    var $sidebar = $('.ui.sidebar').sidebar();
    $('.toggle-menu').on('click', function () {
        $sidebar.sidebar('toggle');
    });
})();
