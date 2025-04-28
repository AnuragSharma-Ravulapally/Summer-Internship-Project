pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/AnuragSharma-Ravulapally/Summer-Internship-Project.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t "binary-visualizer-image" .'
                }
            }
        }
        stage('Run Container') {
            steps {
                script {
                    // First stop and remove any existing container with the same name
                    bat 'docker stop binary-visualizer-container || echo "Container not running"'
                    bat 'docker rm binary-visualizer-container || echo "No container to remove"'
                    
                    // Then run the new container
                    bat 'docker run -d -p 8081:80 --name binary-visualizer-container binary-visualizer-image'
                }
            }
        }
    }
}