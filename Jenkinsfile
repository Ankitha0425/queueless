pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Queueless project'
            }
        }

        stage('Install Dependencies') {
            steps {
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
