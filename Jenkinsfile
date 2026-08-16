pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Queueless project'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '/opt/homebrew/bin/node -v'
                sh '/opt/homebrew/bin/npm -v'
                sh '/opt/homebrew/bin/npm install'
            }
        }

        stage('Test') {
            steps {
                sh '/opt/homebrew/bin/node --check server.js'
            }
        }

        stage('Build') {
            steps {
                echo 'Queueless build completed successfully'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'render-deploy-hook', variable: 'RENDER_DEPLOY_HOOK')]) {
                    sh '''
                        echo "Triggering Render deployment..."
                        curl -X POST "$RENDER_DEPLOY_HOOK"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Queueless CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'Queueless CI/CD Pipeline failed.'
        }
    }
}
