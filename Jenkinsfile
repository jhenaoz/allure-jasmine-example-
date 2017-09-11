#!groovy

final PIPELINE_ENV = 'PIPELINE_ENV'

final DEFAULT_PIPELINE_ENV = 'pull_request'

final PIPELINE_ENVS = 'pull_request'

def PIPELINE_PARAMETERS = '''
DESIRED_NODE_NAME = 'docker'
GIT_CREDENTIALS_ID = 'github'
PIPELINE_VERSION = 'allure-report'
ALLURE_REPORT_PATH = 'allure-results'
PROJECT_NAME = 'juan-test'
PLATFORM = 'node'
HTML_REPORT {
    DIR = 'allure-report'
    FILE = 'index.html'
    NAME = 'HTML Report'
}
DOCKER_IMAGE = 'node-automation-allure'
environments {
    pull_request {
        ENVS = 'prod'
    }
}
'''

properties([
    parameters([
        string(
            name: PIPELINE_ENV,
            description: 'Pipeline Environment Config key',
            defaultValue: DEFAULT_PIPELINE_ENV
        )
    ])
])

def pipelineEnv = env[PIPELINE_ENV] ?: DEFAULT_PIPELINE_ENV,
    config = new ConfigSlurper(pipelineEnv).parse(PIPELINE_PARAMETERS).toProperties()

node(config.DESIRED_NODE_NAME) {
    withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: config.GIT_CREDENTIALS_ID, passwordVariable: 'GITHUB_PASS', usernameVariable: 'GITHUB_USER']]) {
        git(credentialsId: config.GIT_CREDENTIALS_ID, branch: config.PIPELINE_VERSION, url: 'git@github.com:mulesoft/automation-jenkins-pipeline.git')

        load('pipeline.groovy').execute(config, pipelineEnv, PIPELINE_ENVS)
    }
}
