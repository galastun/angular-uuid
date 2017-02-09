describe("UUID Service", function() {
	var map;
	
	beforeEach(angular.mock.module('test'));
	beforeEach(function() {
        module(function($provide) {
            $window = {performance: {
                now: function() {
                    return window.performance.now();
                }
            }};
            $provide.value('$window', $window);
        });
    });
	beforeEach(inject(function(_uuid_) {
		uuid = _uuid_;
	}));
	
	it('returns a uuid', function() {
		expect(uuid.get()).toMatch(/^\w{8}-\w{4}-4\w{3}-\w{4}-\w{12}$/);
	});

    it('returns a uuid without performance', function() {
        $window.performance = null;
		expect(uuid.get()).toMatch(/^\w{8}-\w{4}-4\w{3}-\w{4}-\w{12}$/);
	});
});