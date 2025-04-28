pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                deleteDir() // Clean the workspace
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // build using the Dockerfile in the workspace root
                    dockerImage = docker.build('binary-visualizer-image')
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    bat 'docker run -d -p 8081:80 --name binary-visualizer-container binary-visualizer-image'
                }
            }
        }
    }
}