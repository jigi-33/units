@Library('pipeline@bugfix/rev_sdk') _

def version = '20.2000'

node ('controls') {
    checkout_pipeline("20.2000/feature/new_jf_i18n")
    run_branch = load '/home/sbis/jenkins_pipeline/platforma/branch/run_branch'
    run_branch.execute('units', version)
}