pipeline {
    agent any

    stages {

        stage('Clone Check') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop myapp || true
                docker rm myapp || true

                docker run -d \
                  --name myapp \
                  -p 4004:4040 \
                  myapp
                '''
            }
        }
    }
    
}