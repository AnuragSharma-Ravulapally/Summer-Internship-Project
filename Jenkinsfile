pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
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
            // (Optional) remove any old container
            bat 'docker rm -f binary-visualizer-container || echo "no old container"'

            // Run the new container, mapping host 8081 → container 80
            bat 'docker run -d -p 8081:80 --name binary-visualizer-container binary-visualizer-image'
        }
      }
    }
  }
}
