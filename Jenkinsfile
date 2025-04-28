pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                deleteDir()
                git 'https://github.com/AnuragSharma-Ravulapally/Summer-Internship-Project.git'
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Stop existing containers if any
                    bat 'docker-compose down || echo "No containers to stop"'
                    
                    // Build and start services
                    bat 'docker-compose up -d --build'
                    
                    echo "Container deployed successfully. Access at http://localhost:9000"
                }
            }
        }
    }
}
