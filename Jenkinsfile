pipeline {
    agent any

    environment {
        PATH = "/usr/bin:$PATH"   // Ensure docker-compose is in PATH
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Check PATH') {
            steps {
                sh 'echo $PATH'
                sh 'which docker-compose'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t productservice:latest .'  // Build local image

            }
        }

        stage('Deploy to Server') {
            steps {
                // sh 'docker-compose -f docker-compose.prod.yml up -d' 
                sh 'docker run -d -p 5001:5001  productservice:latest'

                // Uses the locally built image, no rebuild
            }
        }

    }
}
