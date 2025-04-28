pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                deleteDir()
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
                    bat 'docker stop binary-visualizer-container || echo "Container not running"'
                    bat 'docker rm binary-visualizer-container || echo "No container to remove"'
                    bat 'docker run -d -p 9000:80 --name binary-visualizer-container binary-visualizer-image'
                    echo "Container deployed successfully. Access at http://localhost:9000"
                }
            }
        }
    }
}