pipeline {
    agent any

    environment {
        // Use PATH+EXTRA to append directories in declarative pipeline
        PATH+DOCKER = "/usr/bin"
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
                sh 'which docker-compose'  // Should now output: /usr/bin/docker-compose
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t chamithsandeepa2001/productservice:latest .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push chamithsandeepa2001/productservice:latest'
            }
        }

        stage('Deploy to Server') {
            steps {
                sh 'docker pull chamithsandeepa2001/productservice:latest'
                sh 'docker-compose -f docker-compose.prod.yml up -d'
            }
        }

    }
}
