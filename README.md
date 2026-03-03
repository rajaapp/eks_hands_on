1.auto mode off
2.create a Cluster IAM role using recommended
3.cluster access 
    EKS API and configMap need to be selected
4.Cluster endpoint access
  select the public
node
need to go cluser(name) resouces then add the nodes
1.Node IAM role using recommended

client to access the cluster
install awscli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo apt install unzip -y 
sudo ./aws/install
aws --version
Expected output: aws-cli/2.x.x Python/3.x Linux/x86_64
sudo ./aws/install --update

🔷 Install kubectl on Linux (Official Method)
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
kubectl version --client

EKS CLI CMDS
--------------
1.aws eks update-kubeconfig --region <region> --name <cluster-name>
2.kubectl edit configmap aws-auth -n kube-system
----------------
🔹Enable OIDC Provider for Your EKS Cluster
eksctl utils associate-iam-oidc-provider \
  --region ap-southeast-1 \
  --cluster <cluster-name> \
  --approve
------------------
