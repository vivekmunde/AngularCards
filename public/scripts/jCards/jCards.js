angular.module('jCardsMod', [])

.directive('jCards', [
    function () {
        var d = {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                jCardMatchHeight: '=?'
            },
            template: '<div class="j-cards" ng-transclude></div>',
            controller: ['$scope', '$element', '$window',
                function ($scope, $element, $window) {

                    var _this = this;

                    /* ======================================================
                    Cards Height Match 
                    ====================================================== */
                    var _cardMinHeight = 0;

                    /* Set same height for all cards */
                    _this.matchCardsHeight = function (cardHeight) {
                        if (_cardMinHeight < cardHeight) {
                            /* Configure the min-height for the cards 
                            min-height = the height of the tallest card */
                            _cardMinHeight = cardHeight;

                            /* Match cards height */
                            $element.find('.j-card').css('min-height', _cardMinHeight + 'px');
                        }
                    };

                    /* Default setting for card height match configuration */
                    if (!angular.isDefined($scope.jCardMatchHeight)) {
                        $scope.jCardMatchHeight = true;
                    }

                    if ($scope.jCardMatchHeight) {

                        /* Rematch the height of all cards */
                        var resizeHandler = function () {
                            _cardMinHeight = 0;
                            $scope.$digest();
                        };

                        angular.element($window).bind('resize', resizeHandler);

                        $scope.$on('$destroy', function () {
                            /* Remove the event resize listner on window */
                            angular.element($window).unbind('resize', resizeHandler);
                        });

                        /* Method for jCard directive */
                        _this.isMatchCardsHeight = function () {
                            return $scope.jCardMatchHeight;
                        };

                    }

            }]
        };

        return d;
    }])


.directive('jCard', [
    function () {
        var d = {
            restrict: 'E',
            transclude: true,
            require: '^^jCards',
            scope: {
                jCardBg: '='
            },
            replace: true,
            template: '<div class="j-card" ng-transclude></div>',
            controller: ['$scope', '$element',
                function ($scope, $element) {

                    var _this = this;

                    /* ======================================================
                    Configure the hover template/content 
                    ====================================================== */

                    _this.configureHover = function (hoverElement) {

                        /* On mouse over show the hover template/content */
                        var mouseOverHandler = function () {
                            hoverElement.addClass('active');
                        };
                        $element.bind('mouseover', mouseOverHandler);

                        /* On mouse out hide the hover template/content */
                        var mouseOutHandler = function () {
                            hoverElement.removeClass('active');
                        };
                        $element.bind('mouseout', mouseOutHandler);

                        $scope.$on('$destroy', function () {
                            /* Remove the event mouseout listner on scope destroy */
                            $element.unbind('mouseout', mouseOutHandler);

                            /* Remove the event mouseover listner on scope destroy */
                            $element.unbind('mouseover', mouseOverHandler);
                        });

                    };

            }],
            link: function (scope, element, attrs, jCards) {

                /* Directive to set the background image for the cards */
                if (angular.isDefined(scope.jCardBg)) {
                    element.addClass('j-card-bg')
                        .css('background-image', 'url(' + scope.jCardBg + ')');
                }

                /* ======================================================
                Card height watcher 
                ====================================================== */

                if (jCards.isMatchCardsHeight()) {
                    var heightWatcher = scope.$watch(function () {
                        return element.outerHeight();
                    }, function (cardHeight) {

                        /* Set same height for all cards */
                        jCards.matchCardsHeight(cardHeight);

                    });

                    /* Remove the height watcher on scope destroy */
                    scope.$on('$destroy', function () {
                        heightWatcher();
                    });
                }

            }
        };

        return d;
    }])


.directive('jCardHover', [
    function () {
        var d = {
            restrict: 'E',
            transclude: true,
            require: '^jCard',
            replace: true,
            template: '<div class="j-card-hover"><div class="j-card-hover-bg"></div><div class="j-card-hover-content" ng-transclude></div></div>',
            link: function (scope, element, attrs, jCard) {

                /* Pass the hover element to the jCard for configuration */
                jCard.configureHover(element);

            }
        };

        return d;
    }]);