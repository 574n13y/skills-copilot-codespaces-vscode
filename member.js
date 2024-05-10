function skillsMember() {
    return {
        restrict : 'E',
        templateUrl: 'module/skills/views/members.html',
        controller: 'SkillsMemberController',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}