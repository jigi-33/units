node ('controls') {
def version = "19.300"
def workspace = "/home/sbis/workspace/units_${version}/${BRANCH_NAME}"
    ws (workspace){
        deleteDir()
        checkout([$class: 'GitSCM',
            // branches: [[name: "rc-${version}"]],
            branches: [[name: "19.300/feature/add-test-for-units"]],
            doGenerateSubmoduleConfigurations: false,
            extensions: [[
                $class: 'RelativeTargetDirectory',
                relativeTargetDir: "jenkins_pipeline"
                ]],
                submoduleCfg: [],
                userRemoteConfigs: [[
                    credentialsId: CREDENTIAL_ID_GIT,
                    url: "${GIT}:sbis-ci/jenkins_pipeline.git"]]
                                    ])
        helper = load "./jenkins_pipeline/platforma/branch/helper"
        start = load "./jenkins_pipeline/platforma/branch/JenkinsfileUnits"
        run_unit = load "./jenkins_pipeline/platforma/branch/run_unit"
        start.start(version, workspace, helper)
    }
}
