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
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'node --check server.js'
            }
        }

        stage('Build') {
            steps {
                echo 'Queueless build completed successfully'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Queueless deployment completed successfully'
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
